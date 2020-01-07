import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { GetSavingsPlansCoverageRequest, GetSavingsPlansCoverageResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSavingsPlansCoverageCommandInput = GetSavingsPlansCoverageRequest;
export declare type GetSavingsPlansCoverageCommandOutput = GetSavingsPlansCoverageResponse & __MetadataBearer;
export declare class GetSavingsPlansCoverageCommand extends $Command<GetSavingsPlansCoverageCommandInput, GetSavingsPlansCoverageCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: GetSavingsPlansCoverageCommandInput;
    constructor(input: GetSavingsPlansCoverageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSavingsPlansCoverageCommandInput, GetSavingsPlansCoverageCommandOutput>;
    private serialize;
    private deserialize;
}
