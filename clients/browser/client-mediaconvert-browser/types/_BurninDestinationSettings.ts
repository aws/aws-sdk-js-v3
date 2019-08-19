/**
 * Burn-In Destination Settings.
 */
export interface _BurninDestinationSettings {
  /**
   * If no explicit x_position or y_position is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  Alignment?: "CENTERED" | "LEFT" | string;

  /**
   * Specifies the color of the rectangle behind the captions.
   * All burn-in and DVB-Sub font settings must match.
   */
  BackgroundColor?: "NONE" | "BLACK" | "WHITE" | string;

  /**
   * Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match.
   */
  BackgroundOpacity?: number;

  /**
   * Specifies the color of the burned-in captions. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  FontColor?: "WHITE" | "BLACK" | "YELLOW" | "RED" | "GREEN" | "BLUE" | string;

  /**
   * Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent.
   * All burn-in and DVB-Sub font settings must match.
   */
  FontOpacity?: number;

  /**
   * Font resolution in DPI (dots per inch); default is 96 dpi.
   * All burn-in and DVB-Sub font settings must match.
   */
  FontResolution?: number;

  /**
   * Provide the font script, using an ISO 15924 script code, if the LanguageCode is not sufficient for determining the script type. Where LanguageCode or CustomLanguageCode is sufficient, use "AUTOMATIC" or leave unset. This is used to help determine the appropriate font for rendering burn-in captions.
   */
  FontScript?: "AUTOMATIC" | "HANS" | "HANT" | string;

  /**
   * A positive integer indicates the exact font size in points. Set to 0 for automatic font size selection. All burn-in and DVB-Sub font settings must match.
   */
  FontSize?: number;

  /**
   * Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  OutlineColor?:
    | "BLACK"
    | "WHITE"
    | "YELLOW"
    | "RED"
    | "GREEN"
    | "BLUE"
    | string;

  /**
   * Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  OutlineSize?: number;

  /**
   * Specifies the color of the shadow cast by the captions.
   * All burn-in and DVB-Sub font settings must match.
   */
  ShadowColor?: "NONE" | "BLACK" | "WHITE" | string;

  /**
   * Specifies the opacity of the shadow. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent). All burn-in and DVB-Sub font settings must match.
   */
  ShadowOpacity?: number;

  /**
   * Specifies the horizontal offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left. All burn-in and DVB-Sub font settings must match.
   */
  ShadowXOffset?: number;

  /**
   * Specifies the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text. All burn-in and DVB-Sub font settings must match.
   */
  ShadowYOffset?: number;

  /**
   * Only applies to jobs with input captions in Teletext or STL formats. Specify whether the spacing between letters in your captions is set by the captions grid or varies depending on letter width. Choose fixed grid to conform to the spacing specified in the captions file more accurately. Choose proportional to make the text easier to read if the captions are closed caption.
   */
  TeletextSpacing?: "FIXED_GRID" | "PROPORTIONAL" | string;

  /**
   * Specifies the horizontal position of the caption relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit x_position is provided, the horizontal caption position will be determined by the alignment parameter. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  XPosition?: number;

  /**
   * Specifies the vertical position of the caption relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit y_position is provided, the caption will be positioned towards the bottom of the output. This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.
   */
  YPosition?: number;
}

export type _UnmarshalledBurninDestinationSettings = _BurninDestinationSettings;
