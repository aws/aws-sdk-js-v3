import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { CreateDeploymentGroupInput, CreateDeploymentGroupOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDeploymentGroupCommandInput = CreateDeploymentGroupInput;
export declare type CreateDeploymentGroupCommandOutput = CreateDeploymentGroupOutput & __MetadataBearer;
export declare class CreateDeploymentGroupCommand extends $Command<CreateDeploymentGroupCommandInput, CreateDeploymentGroupCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: CreateDeploymentGroupCommandInput;
    constructor(input: CreateDeploymentGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDeploymentGroupCommandInput, CreateDeploymentGroupCommandOutput>;
    private serialize;
    private deserialize;
}
