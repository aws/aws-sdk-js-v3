import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { AddTagsToOnPremisesInstancesInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddTagsToOnPremisesInstancesCommandInput = AddTagsToOnPremisesInstancesInput;
export declare type AddTagsToOnPremisesInstancesCommandOutput = __MetadataBearer;
export declare class AddTagsToOnPremisesInstancesCommand extends $Command<AddTagsToOnPremisesInstancesCommandInput, AddTagsToOnPremisesInstancesCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: AddTagsToOnPremisesInstancesCommandInput;
    constructor(input: AddTagsToOnPremisesInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddTagsToOnPremisesInstancesCommandInput, AddTagsToOnPremisesInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
