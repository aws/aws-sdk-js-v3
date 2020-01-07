import { CognitoIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityClient";
import { MergeDeveloperIdentitiesInput, MergeDeveloperIdentitiesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type MergeDeveloperIdentitiesCommandInput = MergeDeveloperIdentitiesInput;
export declare type MergeDeveloperIdentitiesCommandOutput = MergeDeveloperIdentitiesResponse & __MetadataBearer;
export declare class MergeDeveloperIdentitiesCommand extends $Command<MergeDeveloperIdentitiesCommandInput, MergeDeveloperIdentitiesCommandOutput, CognitoIdentityClientResolvedConfig> {
    readonly input: MergeDeveloperIdentitiesCommandInput;
    constructor(input: MergeDeveloperIdentitiesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityClientResolvedConfig, options?: __HttpHandlerOptions): Handler<MergeDeveloperIdentitiesCommandInput, MergeDeveloperIdentitiesCommandOutput>;
    private serialize;
    private deserialize;
}
