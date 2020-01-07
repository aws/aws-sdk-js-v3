import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { UpdateWebACLRequest, UpdateWebACLResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateWebACLCommandInput = UpdateWebACLRequest;
export declare type UpdateWebACLCommandOutput = UpdateWebACLResponse & __MetadataBearer;
export declare class UpdateWebACLCommand extends $Command<UpdateWebACLCommandInput, UpdateWebACLCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: UpdateWebACLCommandInput;
    constructor(input: UpdateWebACLCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateWebACLCommandInput, UpdateWebACLCommandOutput>;
    private serialize;
    private deserialize;
}
