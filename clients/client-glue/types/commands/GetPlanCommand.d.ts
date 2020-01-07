import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetPlanRequest, GetPlanResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetPlanCommandInput = GetPlanRequest;
export declare type GetPlanCommandOutput = GetPlanResponse & __MetadataBearer;
export declare class GetPlanCommand extends $Command<GetPlanCommandInput, GetPlanCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetPlanCommandInput;
    constructor(input: GetPlanCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPlanCommandInput, GetPlanCommandOutput>;
    private serialize;
    private deserialize;
}
