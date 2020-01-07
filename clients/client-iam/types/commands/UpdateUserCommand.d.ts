import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateUserRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateUserCommandInput = UpdateUserRequest;
export declare type UpdateUserCommandOutput = __MetadataBearer;
export declare class UpdateUserCommand extends $Command<UpdateUserCommandInput, UpdateUserCommandOutput, IAMClientResolvedConfig> {
    readonly input: UpdateUserCommandInput;
    constructor(input: UpdateUserCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateUserCommandInput, UpdateUserCommandOutput>;
    private serialize;
    private deserialize;
}
