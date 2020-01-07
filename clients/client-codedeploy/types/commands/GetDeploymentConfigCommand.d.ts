import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { GetDeploymentConfigInput, GetDeploymentConfigOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDeploymentConfigCommandInput = GetDeploymentConfigInput;
export declare type GetDeploymentConfigCommandOutput = GetDeploymentConfigOutput & __MetadataBearer;
export declare class GetDeploymentConfigCommand extends $Command<GetDeploymentConfigCommandInput, GetDeploymentConfigCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: GetDeploymentConfigCommandInput;
    constructor(input: GetDeploymentConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDeploymentConfigCommandInput, GetDeploymentConfigCommandOutput>;
    private serialize;
    private deserialize;
}
