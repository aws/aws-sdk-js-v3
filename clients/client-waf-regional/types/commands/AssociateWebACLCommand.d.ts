import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { AssociateWebACLRequest, AssociateWebACLResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateWebACLCommandInput = AssociateWebACLRequest;
export declare type AssociateWebACLCommandOutput = AssociateWebACLResponse & __MetadataBearer;
export declare class AssociateWebACLCommand extends $Command<AssociateWebACLCommandInput, AssociateWebACLCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: AssociateWebACLCommandInput;
    constructor(input: AssociateWebACLCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateWebACLCommandInput, AssociateWebACLCommandOutput>;
    private serialize;
    private deserialize;
}
