import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { ListDeploymentsInput, ListDeploymentsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDeploymentsCommandInput = ListDeploymentsInput;
export declare type ListDeploymentsCommandOutput = ListDeploymentsOutput & __MetadataBearer;
export declare class ListDeploymentsCommand extends $Command<ListDeploymentsCommandInput, ListDeploymentsCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: ListDeploymentsCommandInput;
    constructor(input: ListDeploymentsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDeploymentsCommandInput, ListDeploymentsCommandOutput>;
    private serialize;
    private deserialize;
}
