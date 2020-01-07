import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetDataflowGraphRequest, GetDataflowGraphResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDataflowGraphCommandInput = GetDataflowGraphRequest;
export declare type GetDataflowGraphCommandOutput = GetDataflowGraphResponse & __MetadataBearer;
export declare class GetDataflowGraphCommand extends $Command<GetDataflowGraphCommandInput, GetDataflowGraphCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetDataflowGraphCommandInput;
    constructor(input: GetDataflowGraphCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDataflowGraphCommandInput, GetDataflowGraphCommandOutput>;
    private serialize;
    private deserialize;
}
