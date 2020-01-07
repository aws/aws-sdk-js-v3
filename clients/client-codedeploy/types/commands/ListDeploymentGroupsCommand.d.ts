import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { ListDeploymentGroupsInput, ListDeploymentGroupsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDeploymentGroupsCommandInput = ListDeploymentGroupsInput;
export declare type ListDeploymentGroupsCommandOutput = ListDeploymentGroupsOutput & __MetadataBearer;
export declare class ListDeploymentGroupsCommand extends $Command<ListDeploymentGroupsCommandInput, ListDeploymentGroupsCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: ListDeploymentGroupsCommandInput;
    constructor(input: ListDeploymentGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDeploymentGroupsCommandInput, ListDeploymentGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
