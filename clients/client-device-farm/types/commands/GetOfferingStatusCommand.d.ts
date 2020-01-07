import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetOfferingStatusRequest, GetOfferingStatusResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetOfferingStatusCommandInput = GetOfferingStatusRequest;
export declare type GetOfferingStatusCommandOutput = GetOfferingStatusResult & __MetadataBearer;
export declare class GetOfferingStatusCommand extends $Command<GetOfferingStatusCommandInput, GetOfferingStatusCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: GetOfferingStatusCommandInput;
    constructor(input: GetOfferingStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOfferingStatusCommandInput, GetOfferingStatusCommandOutput>;
    private serialize;
    private deserialize;
}
