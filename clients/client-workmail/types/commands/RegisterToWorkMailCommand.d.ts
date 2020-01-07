import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { RegisterToWorkMailRequest, RegisterToWorkMailResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterToWorkMailCommandInput = RegisterToWorkMailRequest;
export declare type RegisterToWorkMailCommandOutput = RegisterToWorkMailResponse & __MetadataBearer;
export declare class RegisterToWorkMailCommand extends $Command<RegisterToWorkMailCommandInput, RegisterToWorkMailCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: RegisterToWorkMailCommandInput;
    constructor(input: RegisterToWorkMailCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterToWorkMailCommandInput, RegisterToWorkMailCommandOutput>;
    private serialize;
    private deserialize;
}
