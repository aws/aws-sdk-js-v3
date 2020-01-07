import { MacieClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MacieClient";
import { AssociateS3ResourcesRequest, AssociateS3ResourcesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateS3ResourcesCommandInput = AssociateS3ResourcesRequest;
export declare type AssociateS3ResourcesCommandOutput = AssociateS3ResourcesResult & __MetadataBearer;
export declare class AssociateS3ResourcesCommand extends $Command<AssociateS3ResourcesCommandInput, AssociateS3ResourcesCommandOutput, MacieClientResolvedConfig> {
    readonly input: AssociateS3ResourcesCommandInput;
    constructor(input: AssociateS3ResourcesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MacieClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateS3ResourcesCommandInput, AssociateS3ResourcesCommandOutput>;
    private serialize;
    private deserialize;
}
