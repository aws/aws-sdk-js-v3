import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { CreateWebACLRequest, CreateWebACLResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateWebACLCommandInput = CreateWebACLRequest;
export declare type CreateWebACLCommandOutput = CreateWebACLResponse & __MetadataBearer;
export declare class CreateWebACLCommand extends $Command<CreateWebACLCommandInput, CreateWebACLCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: CreateWebACLCommandInput;
    constructor(input: CreateWebACLCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateWebACLCommandInput, CreateWebACLCommandOutput>;
    private serialize;
    private deserialize;
}
