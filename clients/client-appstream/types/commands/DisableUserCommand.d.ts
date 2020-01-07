import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DisableUserRequest, DisableUserResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisableUserCommandInput = DisableUserRequest;
export declare type DisableUserCommandOutput = DisableUserResult & __MetadataBearer;
export declare class DisableUserCommand extends $Command<DisableUserCommandInput, DisableUserCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: DisableUserCommandInput;
    constructor(input: DisableUserCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableUserCommandInput, DisableUserCommandOutput>;
    private serialize;
    private deserialize;
}
