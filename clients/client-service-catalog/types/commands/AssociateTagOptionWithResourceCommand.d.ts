import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { AssociateTagOptionWithResourceInput, AssociateTagOptionWithResourceOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateTagOptionWithResourceCommandInput = AssociateTagOptionWithResourceInput;
export declare type AssociateTagOptionWithResourceCommandOutput = AssociateTagOptionWithResourceOutput & __MetadataBearer;
export declare class AssociateTagOptionWithResourceCommand extends $Command<AssociateTagOptionWithResourceCommandInput, AssociateTagOptionWithResourceCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: AssociateTagOptionWithResourceCommandInput;
    constructor(input: AssociateTagOptionWithResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateTagOptionWithResourceCommandInput, AssociateTagOptionWithResourceCommandOutput>;
    private serialize;
    private deserialize;
}
