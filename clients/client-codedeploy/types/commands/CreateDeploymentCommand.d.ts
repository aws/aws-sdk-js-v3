import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { CreateDeploymentInput, CreateDeploymentOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDeploymentCommandInput = CreateDeploymentInput;
export declare type CreateDeploymentCommandOutput = CreateDeploymentOutput & __MetadataBearer;
export declare class CreateDeploymentCommand extends $Command<CreateDeploymentCommandInput, CreateDeploymentCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: CreateDeploymentCommandInput;
    constructor(input: CreateDeploymentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDeploymentCommandInput, CreateDeploymentCommandOutput>;
    private serialize;
    private deserialize;
}
