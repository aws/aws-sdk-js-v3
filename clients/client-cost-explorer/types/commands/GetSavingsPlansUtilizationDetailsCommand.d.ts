import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetSavingsPlansUtilizationDetailsRequest, GetSavingsPlansUtilizationDetailsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSavingsPlansUtilizationDetailsCommandInput = GetSavingsPlansUtilizationDetailsRequest;
export declare type GetSavingsPlansUtilizationDetailsCommandOutput = GetSavingsPlansUtilizationDetailsResponse & __MetadataBearer;
export declare class GetSavingsPlansUtilizationDetailsCommand extends $Command<GetSavingsPlansUtilizationDetailsCommandInput, GetSavingsPlansUtilizationDetailsCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: GetSavingsPlansUtilizationDetailsCommandInput;
    constructor(input: GetSavingsPlansUtilizationDetailsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSavingsPlansUtilizationDetailsCommandInput, GetSavingsPlansUtilizationDetailsCommandOutput>;
    private serialize;
    private deserialize;
}
