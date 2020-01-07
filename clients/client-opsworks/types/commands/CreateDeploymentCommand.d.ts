import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { CreateDeploymentRequest, CreateDeploymentResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDeploymentCommandInput = CreateDeploymentRequest;
export declare type CreateDeploymentCommandOutput = CreateDeploymentResult & __MetadataBearer;
export declare class CreateDeploymentCommand extends $Command<CreateDeploymentCommandInput, CreateDeploymentCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: CreateDeploymentCommandInput;
    constructor(input: CreateDeploymentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDeploymentCommandInput, CreateDeploymentCommandOutput>;
    private serialize;
    private deserialize;
}
