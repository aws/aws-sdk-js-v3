import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetInstanceProfileRequest, GetInstanceProfileResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetInstanceProfileCommandInput = GetInstanceProfileRequest;
export declare type GetInstanceProfileCommandOutput = GetInstanceProfileResult & __MetadataBearer;
export declare class GetInstanceProfileCommand extends $Command<GetInstanceProfileCommandInput, GetInstanceProfileCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: GetInstanceProfileCommandInput;
    constructor(input: GetInstanceProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInstanceProfileCommandInput, GetInstanceProfileCommandOutput>;
    private serialize;
    private deserialize;
}
