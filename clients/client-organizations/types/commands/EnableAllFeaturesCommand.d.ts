import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { EnableAllFeaturesRequest, EnableAllFeaturesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnableAllFeaturesCommandInput = EnableAllFeaturesRequest;
export declare type EnableAllFeaturesCommandOutput = EnableAllFeaturesResponse & __MetadataBearer;
export declare class EnableAllFeaturesCommand extends $Command<EnableAllFeaturesCommandInput, EnableAllFeaturesCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: EnableAllFeaturesCommandInput;
    constructor(input: EnableAllFeaturesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableAllFeaturesCommandInput, EnableAllFeaturesCommandOutput>;
    private serialize;
    private deserialize;
}
