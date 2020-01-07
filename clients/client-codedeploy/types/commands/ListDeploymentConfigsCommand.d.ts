import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { ListDeploymentConfigsInput, ListDeploymentConfigsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDeploymentConfigsCommandInput = ListDeploymentConfigsInput;
export declare type ListDeploymentConfigsCommandOutput = ListDeploymentConfigsOutput & __MetadataBearer;
export declare class ListDeploymentConfigsCommand extends $Command<ListDeploymentConfigsCommandInput, ListDeploymentConfigsCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: ListDeploymentConfigsCommandInput;
    constructor(input: ListDeploymentConfigsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDeploymentConfigsCommandInput, ListDeploymentConfigsCommandOutput>;
    private serialize;
    private deserialize;
}
