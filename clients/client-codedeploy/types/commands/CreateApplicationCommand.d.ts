import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { CreateApplicationInput, CreateApplicationOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateApplicationCommandInput = CreateApplicationInput;
export declare type CreateApplicationCommandOutput = CreateApplicationOutput & __MetadataBearer;
export declare class CreateApplicationCommand extends $Command<CreateApplicationCommandInput, CreateApplicationCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: CreateApplicationCommandInput;
    constructor(input: CreateApplicationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateApplicationCommandInput, CreateApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
