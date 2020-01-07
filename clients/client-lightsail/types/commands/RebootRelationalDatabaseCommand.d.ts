import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { RebootRelationalDatabaseRequest, RebootRelationalDatabaseResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RebootRelationalDatabaseCommandInput = RebootRelationalDatabaseRequest;
export declare type RebootRelationalDatabaseCommandOutput = RebootRelationalDatabaseResult & __MetadataBearer;
export declare class RebootRelationalDatabaseCommand extends $Command<RebootRelationalDatabaseCommandInput, RebootRelationalDatabaseCommandOutput, LightsailClientResolvedConfig> {
    readonly input: RebootRelationalDatabaseCommandInput;
    constructor(input: RebootRelationalDatabaseCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RebootRelationalDatabaseCommandInput, RebootRelationalDatabaseCommandOutput>;
    private serialize;
    private deserialize;
}
