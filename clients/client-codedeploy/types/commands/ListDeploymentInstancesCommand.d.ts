import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { ListDeploymentInstancesInput, ListDeploymentInstancesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDeploymentInstancesCommandInput = ListDeploymentInstancesInput;
export declare type ListDeploymentInstancesCommandOutput = ListDeploymentInstancesOutput & __MetadataBearer;
export declare class ListDeploymentInstancesCommand extends $Command<ListDeploymentInstancesCommandInput, ListDeploymentInstancesCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: ListDeploymentInstancesCommandInput;
    constructor(input: ListDeploymentInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDeploymentInstancesCommandInput, ListDeploymentInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
