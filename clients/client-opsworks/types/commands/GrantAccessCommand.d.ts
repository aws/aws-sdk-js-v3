import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { GrantAccessRequest, GrantAccessResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GrantAccessCommandInput = GrantAccessRequest;
export declare type GrantAccessCommandOutput = GrantAccessResult & __MetadataBearer;
export declare class GrantAccessCommand extends $Command<GrantAccessCommandInput, GrantAccessCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: GrantAccessCommandInput;
    constructor(input: GrantAccessCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GrantAccessCommandInput, GrantAccessCommandOutput>;
    private serialize;
    private deserialize;
}
