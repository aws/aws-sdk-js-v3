import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { StopBulkDeploymentRequest, StopBulkDeploymentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopBulkDeploymentCommandInput = StopBulkDeploymentRequest;
export declare type StopBulkDeploymentCommandOutput = StopBulkDeploymentResponse & __MetadataBearer;
export declare class StopBulkDeploymentCommand extends $Command<StopBulkDeploymentCommandInput, StopBulkDeploymentCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: StopBulkDeploymentCommandInput;
    constructor(input: StopBulkDeploymentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopBulkDeploymentCommandInput, StopBulkDeploymentCommandOutput>;
    private serialize;
    private deserialize;
}
