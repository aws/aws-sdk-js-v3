import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DeleteUserRequest, DeleteUserResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteUserCommandInput = DeleteUserRequest;
export declare type DeleteUserCommandOutput = DeleteUserResult & __MetadataBearer;
export declare class DeleteUserCommand extends $Command<DeleteUserCommandInput, DeleteUserCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: DeleteUserCommandInput;
    constructor(input: DeleteUserCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteUserCommandInput, DeleteUserCommandOutput>;
    private serialize;
    private deserialize;
}
