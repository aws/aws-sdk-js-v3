import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { EnableUserRequest, EnableUserResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnableUserCommandInput = EnableUserRequest;
export declare type EnableUserCommandOutput = EnableUserResult & __MetadataBearer;
export declare class EnableUserCommand extends $Command<EnableUserCommandInput, EnableUserCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: EnableUserCommandInput;
    constructor(input: EnableUserCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableUserCommandInput, EnableUserCommandOutput>;
    private serialize;
    private deserialize;
}
