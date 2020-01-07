import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { ListDeploymentTargetsInput, ListDeploymentTargetsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDeploymentTargetsCommandInput = ListDeploymentTargetsInput;
export declare type ListDeploymentTargetsCommandOutput = ListDeploymentTargetsOutput & __MetadataBearer;
export declare class ListDeploymentTargetsCommand extends $Command<ListDeploymentTargetsCommandInput, ListDeploymentTargetsCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: ListDeploymentTargetsCommandInput;
    constructor(input: ListDeploymentTargetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDeploymentTargetsCommandInput, ListDeploymentTargetsCommandOutput>;
    private serialize;
    private deserialize;
}
