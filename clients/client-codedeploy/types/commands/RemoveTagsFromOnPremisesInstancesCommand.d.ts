import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { RemoveTagsFromOnPremisesInstancesInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RemoveTagsFromOnPremisesInstancesCommandInput = RemoveTagsFromOnPremisesInstancesInput;
export declare type RemoveTagsFromOnPremisesInstancesCommandOutput = __MetadataBearer;
export declare class RemoveTagsFromOnPremisesInstancesCommand extends $Command<RemoveTagsFromOnPremisesInstancesCommandInput, RemoveTagsFromOnPremisesInstancesCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: RemoveTagsFromOnPremisesInstancesCommandInput;
    constructor(input: RemoveTagsFromOnPremisesInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveTagsFromOnPremisesInstancesCommandInput, RemoveTagsFromOnPremisesInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
