import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { StartBulkDeploymentRequest, StartBulkDeploymentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartBulkDeploymentCommandInput = StartBulkDeploymentRequest;
export declare type StartBulkDeploymentCommandOutput = StartBulkDeploymentResponse & __MetadataBearer;
export declare class StartBulkDeploymentCommand extends $Command<StartBulkDeploymentCommandInput, StartBulkDeploymentCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: StartBulkDeploymentCommandInput;
    constructor(input: StartBulkDeploymentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartBulkDeploymentCommandInput, StartBulkDeploymentCommandOutput>;
    private serialize;
    private deserialize;
}
