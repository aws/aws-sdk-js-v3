import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { DeleteUserRequest, DeleteUserResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteUserCommandInput = DeleteUserRequest;
export declare type DeleteUserCommandOutput = DeleteUserResponse & __MetadataBearer;
export declare class DeleteUserCommand extends $Command<DeleteUserCommandInput, DeleteUserCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: DeleteUserCommandInput;
    constructor(input: DeleteUserCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteUserCommandInput, DeleteUserCommandOutput>;
    private serialize;
    private deserialize;
}
