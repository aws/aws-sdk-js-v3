import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { DeleteNetworkProfileRequest, DeleteNetworkProfileResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteNetworkProfileCommandInput = DeleteNetworkProfileRequest;
export declare type DeleteNetworkProfileCommandOutput = DeleteNetworkProfileResult & __MetadataBearer;
export declare class DeleteNetworkProfileCommand extends $Command<DeleteNetworkProfileCommandInput, DeleteNetworkProfileCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: DeleteNetworkProfileCommandInput;
    constructor(input: DeleteNetworkProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteNetworkProfileCommandInput, DeleteNetworkProfileCommandOutput>;
    private serialize;
    private deserialize;
}
