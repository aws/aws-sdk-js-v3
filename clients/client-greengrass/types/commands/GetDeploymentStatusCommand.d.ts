import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetDeploymentStatusRequest, GetDeploymentStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDeploymentStatusCommandInput = GetDeploymentStatusRequest;
export declare type GetDeploymentStatusCommandOutput = GetDeploymentStatusResponse & __MetadataBearer;
export declare class GetDeploymentStatusCommand extends $Command<GetDeploymentStatusCommandInput, GetDeploymentStatusCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetDeploymentStatusCommandInput;
    constructor(input: GetDeploymentStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDeploymentStatusCommandInput, GetDeploymentStatusCommandOutput>;
    private serialize;
    private deserialize;
}
