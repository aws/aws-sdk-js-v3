import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { RemoveUserFromGroupRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RemoveUserFromGroupCommandInput = RemoveUserFromGroupRequest;
export declare type RemoveUserFromGroupCommandOutput = __MetadataBearer;
export declare class RemoveUserFromGroupCommand extends $Command<RemoveUserFromGroupCommandInput, RemoveUserFromGroupCommandOutput, IAMClientResolvedConfig> {
    readonly input: RemoveUserFromGroupCommandInput;
    constructor(input: RemoveUserFromGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveUserFromGroupCommandInput, RemoveUserFromGroupCommandOutput>;
    private serialize;
    private deserialize;
}
