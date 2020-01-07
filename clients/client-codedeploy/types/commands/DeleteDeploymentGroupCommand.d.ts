import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { DeleteDeploymentGroupInput, DeleteDeploymentGroupOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDeploymentGroupCommandInput = DeleteDeploymentGroupInput;
export declare type DeleteDeploymentGroupCommandOutput = DeleteDeploymentGroupOutput & __MetadataBearer;
export declare class DeleteDeploymentGroupCommand extends $Command<DeleteDeploymentGroupCommandInput, DeleteDeploymentGroupCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: DeleteDeploymentGroupCommandInput;
    constructor(input: DeleteDeploymentGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDeploymentGroupCommandInput, DeleteDeploymentGroupCommandOutput>;
    private serialize;
    private deserialize;
}
