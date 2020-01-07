import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { DeleteDeploymentConfigInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDeploymentConfigCommandInput = DeleteDeploymentConfigInput;
export declare type DeleteDeploymentConfigCommandOutput = __MetadataBearer;
export declare class DeleteDeploymentConfigCommand extends $Command<DeleteDeploymentConfigCommandInput, DeleteDeploymentConfigCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: DeleteDeploymentConfigCommandInput;
    constructor(input: DeleteDeploymentConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDeploymentConfigCommandInput, DeleteDeploymentConfigCommandOutput>;
    private serialize;
    private deserialize;
}
