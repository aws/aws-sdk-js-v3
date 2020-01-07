import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { EstimateTemplateCostInput, EstimateTemplateCostOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EstimateTemplateCostCommandInput = EstimateTemplateCostInput;
export declare type EstimateTemplateCostCommandOutput = EstimateTemplateCostOutput & __MetadataBearer;
export declare class EstimateTemplateCostCommand extends $Command<EstimateTemplateCostCommandInput, EstimateTemplateCostCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: EstimateTemplateCostCommandInput;
    constructor(input: EstimateTemplateCostCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EstimateTemplateCostCommandInput, EstimateTemplateCostCommandOutput>;
    private serialize;
    private deserialize;
}
