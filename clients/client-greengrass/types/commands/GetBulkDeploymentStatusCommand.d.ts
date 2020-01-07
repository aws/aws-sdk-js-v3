import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetBulkDeploymentStatusRequest, GetBulkDeploymentStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetBulkDeploymentStatusCommandInput = GetBulkDeploymentStatusRequest;
export declare type GetBulkDeploymentStatusCommandOutput = GetBulkDeploymentStatusResponse & __MetadataBearer;
export declare class GetBulkDeploymentStatusCommand extends $Command<GetBulkDeploymentStatusCommandInput, GetBulkDeploymentStatusCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetBulkDeploymentStatusCommandInput;
    constructor(input: GetBulkDeploymentStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetBulkDeploymentStatusCommandInput, GetBulkDeploymentStatusCommandOutput>;
    private serialize;
    private deserialize;
}
