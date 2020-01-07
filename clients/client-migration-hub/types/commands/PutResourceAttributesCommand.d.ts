import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { PutResourceAttributesRequest, PutResourceAttributesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutResourceAttributesCommandInput = PutResourceAttributesRequest;
export declare type PutResourceAttributesCommandOutput = PutResourceAttributesResult & __MetadataBearer;
export declare class PutResourceAttributesCommand extends $Command<PutResourceAttributesCommandInput, PutResourceAttributesCommandOutput, MigrationHubClientResolvedConfig> {
    readonly input: PutResourceAttributesCommandInput;
    constructor(input: PutResourceAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutResourceAttributesCommandInput, PutResourceAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
