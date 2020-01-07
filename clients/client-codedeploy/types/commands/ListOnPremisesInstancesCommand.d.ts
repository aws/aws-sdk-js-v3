import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { ListOnPremisesInstancesInput, ListOnPremisesInstancesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListOnPremisesInstancesCommandInput = ListOnPremisesInstancesInput;
export declare type ListOnPremisesInstancesCommandOutput = ListOnPremisesInstancesOutput & __MetadataBearer;
export declare class ListOnPremisesInstancesCommand extends $Command<ListOnPremisesInstancesCommandInput, ListOnPremisesInstancesCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: ListOnPremisesInstancesCommandInput;
    constructor(input: ListOnPremisesInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListOnPremisesInstancesCommandInput, ListOnPremisesInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
