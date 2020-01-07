import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { UpdateUserRequest, UpdateUserResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateUserCommandInput = UpdateUserRequest;
export declare type UpdateUserCommandOutput = UpdateUserResponse & __MetadataBearer;
export declare class UpdateUserCommand extends $Command<UpdateUserCommandInput, UpdateUserCommandOutput, TransferClientResolvedConfig> {
    readonly input: UpdateUserCommandInput;
    constructor(input: UpdateUserCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TransferClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateUserCommandInput, UpdateUserCommandOutput>;
    private serialize;
    private deserialize;
}
