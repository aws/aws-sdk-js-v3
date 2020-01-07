import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { RenewOfferingRequest, RenewOfferingResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RenewOfferingCommandInput = RenewOfferingRequest;
export declare type RenewOfferingCommandOutput = RenewOfferingResult & __MetadataBearer;
export declare class RenewOfferingCommand extends $Command<RenewOfferingCommandInput, RenewOfferingCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: RenewOfferingCommandInput;
    constructor(input: RenewOfferingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RenewOfferingCommandInput, RenewOfferingCommandOutput>;
    private serialize;
    private deserialize;
}
