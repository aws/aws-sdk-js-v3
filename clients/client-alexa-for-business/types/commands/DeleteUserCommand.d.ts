import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DeleteUserRequest, DeleteUserResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteUserCommandInput = DeleteUserRequest;
export declare type DeleteUserCommandOutput = DeleteUserResponse & __MetadataBearer;
export declare class DeleteUserCommand extends $Command<DeleteUserCommandInput, DeleteUserCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: DeleteUserCommandInput;
    constructor(input: DeleteUserCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteUserCommandInput, DeleteUserCommandOutput>;
    private serialize;
    private deserialize;
}
