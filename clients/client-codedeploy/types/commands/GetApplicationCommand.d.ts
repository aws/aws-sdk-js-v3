import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { GetApplicationInput, GetApplicationOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetApplicationCommandInput = GetApplicationInput;
export declare type GetApplicationCommandOutput = GetApplicationOutput & __MetadataBearer;
export declare class GetApplicationCommand extends $Command<GetApplicationCommandInput, GetApplicationCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: GetApplicationCommandInput;
    constructor(input: GetApplicationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetApplicationCommandInput, GetApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
