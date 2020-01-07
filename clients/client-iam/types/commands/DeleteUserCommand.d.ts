import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteUserRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteUserCommandInput = DeleteUserRequest;
export declare type DeleteUserCommandOutput = __MetadataBearer;
export declare class DeleteUserCommand extends $Command<DeleteUserCommandInput, DeleteUserCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteUserCommandInput;
    constructor(input: DeleteUserCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteUserCommandInput, DeleteUserCommandOutput>;
    private serialize;
    private deserialize;
}
