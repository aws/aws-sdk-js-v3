import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { UpdateDeploymentGroupInput, UpdateDeploymentGroupOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateDeploymentGroupCommandInput = UpdateDeploymentGroupInput;
export declare type UpdateDeploymentGroupCommandOutput = UpdateDeploymentGroupOutput & __MetadataBearer;
export declare class UpdateDeploymentGroupCommand extends $Command<UpdateDeploymentGroupCommandInput, UpdateDeploymentGroupCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: UpdateDeploymentGroupCommandInput;
    constructor(input: UpdateDeploymentGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDeploymentGroupCommandInput, UpdateDeploymentGroupCommandOutput>;
    private serialize;
    private deserialize;
}
