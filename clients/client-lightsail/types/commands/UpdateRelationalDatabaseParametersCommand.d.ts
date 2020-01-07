import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { UpdateRelationalDatabaseParametersRequest, UpdateRelationalDatabaseParametersResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateRelationalDatabaseParametersCommandInput = UpdateRelationalDatabaseParametersRequest;
export declare type UpdateRelationalDatabaseParametersCommandOutput = UpdateRelationalDatabaseParametersResult & __MetadataBearer;
export declare class UpdateRelationalDatabaseParametersCommand extends $Command<UpdateRelationalDatabaseParametersCommandInput, UpdateRelationalDatabaseParametersCommandOutput, LightsailClientResolvedConfig> {
    readonly input: UpdateRelationalDatabaseParametersCommandInput;
    constructor(input: UpdateRelationalDatabaseParametersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRelationalDatabaseParametersCommandInput, UpdateRelationalDatabaseParametersCommandOutput>;
    private serialize;
    private deserialize;
}
