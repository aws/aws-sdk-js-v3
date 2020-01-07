import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { UpdateNetworkProfileRequest, UpdateNetworkProfileResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateNetworkProfileCommandInput = UpdateNetworkProfileRequest;
export declare type UpdateNetworkProfileCommandOutput = UpdateNetworkProfileResult & __MetadataBearer;
export declare class UpdateNetworkProfileCommand extends $Command<UpdateNetworkProfileCommandInput, UpdateNetworkProfileCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: UpdateNetworkProfileCommandInput;
    constructor(input: UpdateNetworkProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateNetworkProfileCommandInput, UpdateNetworkProfileCommandOutput>;
    private serialize;
    private deserialize;
}
