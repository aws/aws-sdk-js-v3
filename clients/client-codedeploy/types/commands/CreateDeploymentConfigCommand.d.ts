import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { CreateDeploymentConfigInput, CreateDeploymentConfigOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDeploymentConfigCommandInput = CreateDeploymentConfigInput;
export declare type CreateDeploymentConfigCommandOutput = CreateDeploymentConfigOutput & __MetadataBearer;
export declare class CreateDeploymentConfigCommand extends $Command<CreateDeploymentConfigCommandInput, CreateDeploymentConfigCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: CreateDeploymentConfigCommandInput;
    constructor(input: CreateDeploymentConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDeploymentConfigCommandInput, CreateDeploymentConfigCommandOutput>;
    private serialize;
    private deserialize;
}
